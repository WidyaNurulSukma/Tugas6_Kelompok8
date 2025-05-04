import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Buku from 'App/Models/Buku'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class BukusController {
    // 1. Menampilkan form untuk menambahkan buku baru
    public async create({ view }: HttpContextContract) {
      return view.render('buku/create')
    }

    // 2. Menangani submission form dan menyimpan ke database
  public async store({ request, response, session }: HttpContextContract) {
    // Validasi input dari form
    const bukuSchema = schema.create({
      judul: schema.string({ trim: true }, [
        rules.required(),
        rules.maxLength(255)
      ]),
      penulis: schema.string({ trim: true }, [
        rules.required(),
        rules.maxLength(255)
      ]),
      tahun_terbit: schema.number([
        rules.required()
      ]),
      deskripsi: schema.string.optional({ trim: true }),
    })

    // Coba validasi
    try {
      const payload = await request.validate({ schema: bukuSchema })
      
      // 3. Menyimpan data ke database
      await Buku.create(payload)
      
      // 5. Redirect dengan flash message
      session.flash('notification', 'Buku berhasil ditambahkan!')
      return response.redirect('/buku')
    } catch (error) {
      session.flash('errors', error.messages)
      return response.redirect().back()
    }
  }

  // 4. Menampilkan semua data buku
  public async index({ view }: HttpContextContract) {
    const bukus = await Buku.all()
    return view.render('buku/index', { bukus })
  }

}
