export type Tags = 'Backend' | 'Fullstack' | 'Architecture' | 'DevOps'

export type Project = {
    id: number
    title: string
    description: string
    image: string
    tags: Tags[]
}