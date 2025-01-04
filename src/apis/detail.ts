import { type ResType } from './shared'
import { http } from '@/utils'

export type DetailDataType = {

    art_id: string

    attitude: number

    aut_id: string

    aut_name: string

    aut_photo: string

    comm_count: number

    content: string

    is_collected: boolean

    is_followed: boolean

    like_count: number

    pubdate: string

    read_count: number

    title: string
}

export function fetchDetailAPI(id: string) {
    return http.request<ResType<DetailDataType>>({
        url: `/articles?article_id=${id}`,
    })
}
