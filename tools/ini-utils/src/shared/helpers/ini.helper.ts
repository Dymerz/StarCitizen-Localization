// External modules
import * as fs  from 'fs';
import * as ini from 'ini';

// Interfaces
import { Ini }  from '../types/ini.type';


export class IniHelper
{
  /**
   * Load an INI file and return its content as an object
   * @param filePath
   * @returns
  */
  public static loadFile(filePath: string): Ini
  {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
      .replace(/([\S] *)(?<!\\)([;#])/g, '$1\\$2')  // escape semicolon and hash

    const parsed = ini.parse(fileContent);
    return {
      path   : filePath,
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
    fs.writeFileSync(file.path, '\ufeff'+ini.stringify(file.content), { encoding: 'utf-8' });
    console.log(`File ${file.path} has been created successfully.`);
  }

  public static exists(filePath: string): boolean
  {
    return fs.lstatSync(filePath).isFile();
  }
}