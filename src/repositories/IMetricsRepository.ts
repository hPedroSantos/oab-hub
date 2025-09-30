export interface IAcurracyRepository {
    getAcurracy(id: any): Promise<String>
}

export interface IGetGroupQuestsRepository {
    getGroupQuests(id: any): Promise<String>
}