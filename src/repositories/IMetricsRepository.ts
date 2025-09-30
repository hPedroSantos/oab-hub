export interface IAcurracyRepository {
    getAcurracy(id): Promise<String>
}

export interface IGetGroupQuestsRepository {
    getGroupQuests(id): Promise<String>
}