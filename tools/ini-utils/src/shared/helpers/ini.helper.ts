import * as fs from 'fs';
import * as ini from 'ini';
import { Ini } from '../types/ini.type';

export class IniHelper
{
  public static writeFileSync(path: string, data: string, options: fs.WriteFileOptions): void
  {
    fs.writeFileSync(path, data, options);
  }

  public static readFileSync(path: string): string
  {
    return fs.readFileSync(path, 'utf-8');
  }

  /**
   * Parses the provided INI content into a record where keys are strings and values are strings or undefined.
   * The method first escapes the values in the content using {@link IniHelper.escapeValues} before parsing.
   *
   * @param content - The INI content to parse as a string
   * @returns A record with string keys and string or undefined values representing the parsed INI content
   */
  public static parse(content: string): Record<string, string | undefined>
  {
    const contentEscaped = IniHelper.escapeValues(content);
    return ini.parse(contentEscaped);
  }

  /**
   * Load an INI file and return its content as an object
   * @param filePath
   * @returns
  */
  public static loadFile(filePath: string): Ini
  {
    const fileContent = IniHelper.readFileSync(filePath);

    const parsed = IniHelper.parse(fileContent);
    return {
      path: filePath,
      content: parsed
    };
  }

  /**
   * Write merged INI file in UTF-8 with BOM
   * @param filePath
   * @param data
   */
  public static writeFile(file: Ini): void
  {
    IniHelper.writeFileSync(file.path, '\ufeff' + ini.stringify(file.content), { encoding: 'utf-8', });
  }

  /**
   * Escape semicolon and hash from values in INI file
   * @param content
   * @returns
   */
  private static escapeValues(content: string): string
  {
    return content.replace(/^([^=\r\n]+)=(.*)$/gm, (_, key, value) =>
    {
      const escapedValue = value.replace(/([#;\\])/g, '\\$1');
      return `${key}=${escapedValue}`;
    });
  }
}