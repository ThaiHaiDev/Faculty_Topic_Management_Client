export interface AddTopicRequest {
    name: string,
    desc: string,
    target: string,
    product: string,
    technology: string,
    idSpecialized: string,
    typeTopic: string,
    sesmeter: string,
    slsv: string,
    leader: string,
    gvhd: string,
    team?: [string] | [],
}

export interface AddTopicResponse {
    name: string,
    desc: string,
    target: string,
    product: string,
    technology: string,
    idSpecialized: string,
    typeTopic: string,
    sesmeter: string,
    slsv: number,
    leader: string,
    gvhd: string,
    team?: [string] | [],
    status: string,
    _id: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: number
}