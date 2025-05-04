import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Buku extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public judul: string

  @column()
  public penulis: string

  @column()
  public tahun_terbit: number

  @column()
  public deskripsi: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
