import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext' // Mengimpor tipe HttpContextContract untuk akses konteks HTTP
import Buku from 'App/Models/Buku' // Mengimpor model Buku yang merepresentasikan tabel buku di database
import { schema, rules } from '@ioc:Adonis/Core/Validator' // Mengimpor schema dan rules untuk validasi input pengguna

export default class BukusController {
    // 1. Menampilkan form untuk menambahkan buku baru
    public async create({ view }: HttpContextContract) {
      return view.render('buku/create') // Merender view form create
    }

    // 2. Menangani submission form dan menyimpan ke database
    public async store({ request, response, session }: HttpContextContract) {
      // Validasi input dari form menggunakan schema
      const bukuSchema = schema.create({
        judul: schema.string({ trim: true }, [
          rules.required(), // Wajib diisi
          rules.maxLength(255) // Maksimal 255 karakter
        ]),
        penulis: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(255)
        ]),
        tahun_terbit: schema.number([
          rules.required()
        ]),
        deskripsi: schema.string.optional({ trim: true }), // Opsional
      })

      // Coba validasi input pengguna
      try {
        const payload = await request.validate({ schema: bukuSchema }) // Validasi data dari form
        
        // 3. Menyimpan data ke database jika validasi berhasil
        await Buku.create(payload)
        
        // 5. Tambahkan flash message untuk notifikasi sukses
        session.flash('notification', 'Buku berhasil ditambahkan!')
        return response.redirect('/buku') // Redirect ke halaman daftar buku
      } catch (error) {
        // Jika validasi gagal, kirim error ke session dan kembalikan ke form
        session.flash('errors', error.messages)
        return response.redirect().back()
      }
    }

    // 4. Menampilkan semua data buku
    public async index({ view }: HttpContextContract) {
      const bukus = await Buku.all() // Mengambil semua entri buku dari database
      return view.render('buku/index', { bukus }) // Merender halaman index dan kirim data buku
    }
}
