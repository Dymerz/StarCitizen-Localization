export class StringHelper
{
  /**
   * Get all matches of a regex
   * @param value
   * @param regex
   */
  public static getAllMatchesGroups<Group extends { [key: string]: string }>(value: string, regex: RegExp): Group[]
  {
    const models: Group[] = []

    // get all matches
    const matches = value.matchAll(regex)

    // iterate over matches
    for (const match of matches)
    {
      // create new model
      const model: Group = {} as Group

      // iterate over groups
      for (const group in match.groups)
      {
        // add group to model
        if (Object.prototype.hasOwnProperty.call(match.groups, group))
        {
          model[group as keyof Group] = match.groups[group]! as Group[keyof Group]
        }
      }

      // add model to models array
      models.push(model)
    }

    return models
  }
}