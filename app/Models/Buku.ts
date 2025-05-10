import { DateTime } from 'luxon' // Mengimpor kelas DateTime dari pustaka Luxon untuk menangani tanggal dan waktu
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm' // Mengimpor BaseModel dan decorator column dari ORM bawaan AdonisJS

export default class Buku extends BaseModel {
  @column({ isPrimary: true }) // Menandai kolom 'id' sebagai primary key
  public id: number

  @column() // Kolom untuk menyimpan judul buku
  public judul: string

  @column() // Kolom untuk menyimpan nama penulis buku
  public penulis: string

  @column() // Kolom untuk menyimpan tahun terbit dalam bentuk angka
  public tahun_terbit: number

  @column() // Kolom deskripsi buku, bersifat opsional (nullable)
  public deskripsi: string | null

  @column.dateTime({ autoCreate: true }) // Kolom otomatis terisi saat entri dibuat
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true }) // Kolom otomatis terisi saat entri dibuat dan diperbarui
  public updatedAt: DateTime
}
