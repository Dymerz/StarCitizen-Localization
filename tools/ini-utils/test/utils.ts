import { Ini } from '../src/shared/types/ini.type'

export const makeIniWithKeys = (content: Record<string, string>): Ini =>
{
  return {
    path: 'test.ini',
    content
  };
}

export const makeIniWithKey = (key: string, value: string|number): Ini =>
{
  return {
    path: 'test.ini',
    content: {
      [key]: value as string
    }
  };
}

export const makeIniFromKey = (file: Ini, key: string): Ini =>
{
  const content = Object.keys(file.content)
    .filter((k) => k === key)
    .reduce((obj, k) => {
      obj[k] = file.content[k];
      return obj;
    }, {} as any);

  if(Object.keys(content).length === 0)
    throw new Error(`Key '${key}' not found in file ${file.path}`);

  return {
    path: file.path,
    content
  };
};

export const makeEmptyIni = (): Ini =>
{
  return {
    path: 'test.ini',
    content: {}
  }
}