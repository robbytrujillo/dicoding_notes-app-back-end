// Kriteria 1 - Web Server dapat menyimpan catatan
// {
//     id: string,
//     title: string,
//     createdAt: string,
//     updatedAt: string,
//     tags: array of string,
//     body: string,
// },


// {
//     id: 'notes-V1StGXR8_Z5jdHi6B-myT',
//     title: 'Sejarah JavaScript',
//     createdAt: '2020-12-23T23:00:09.686Z',
//     updatedAt: '2020-12-23T23:00:09.686Z',
//     tags: ['NodeJS', 'JavaScript'],
//     body: 'JavaScript pertama kali dikembangkan oleh Brendan Eich dari Netscape di bawah nama Mocha, yang nantinya namanya diganti menjadi LiveScript, dan akhirnya menjadi JavaScript. Navigator sebelumnya telah mendukung Java untuk lebih bisa dimanfaatkan para pemrogram yang non-Java.',
//    },
// {
//     "title": "Judul Catatan",
//     "tags": ["Tag 1", "Tag 2"],
//     "body": "Konten catatan"
//    }

// {
//     "status": "success",
//     "message": "Catatan berhasil ditambahkan", // optional message if there is any error or success status code
//     "data": {
//         "noteID": "V09YExygSUYogwWJ"
//     } 
// }

// {
//     "status": "error",
//     "message": "Catatan gagal untuk ditambahkan"
// }

// // Kriteria 2 - Web Server dapat menampilkan catatan
// {
//     "status": "success",
//     "data": {
//       "notes": [
//         {
//           "id":"notes-V1StGXR8_Z5jdHi6B-myT",
//           "title":"Catatan 1",
//           "createdAt":"2020-12-23T23:00:09.686Z",
//           "updatedAt":"2020-12-23T23:00:09.686Z",
//           "tags":[
//             "Tag 1",
//             "Tag 2"
//           ],
//           "body":"Isi dari catatan 1"
//         },
//         {
//           "id":"notes-V1StGXR8_98apmLk3mm1",
//           "title":"Catatan 2",
//           "createdAt":"2020-12-23T23:00:09.686Z",
//           "updatedAt":"2020-12-23T23:00:09.686Z",
//           "tags":[
//             "Tag 1",
//             "Tag 2"
//           ],
//           "body":"Isi dari catatan 2"
//         }
//       ]
//     }
//   }

//   {
//     "status": "success",
//     "data": {
//       "notes": []
//     }
//   }

//   {
//     "status": "success",
//     "data": {
//       "note": {
//         "id":"notes-V1StGXR8_Z5jdHi6B-myT",
//         "title":"Catatan 1",
//         "createdAt":"2020-12-23T23:00:09.686Z",
//         "updatedAt":"2020-12-23T23:00:09.686Z",
//         "tags":[
//           "Tag 1",
//           "Tag 2"
//         ],
//         "body":"Isi dari catatan 1"
//       }
//     }
//   }

//   {
//     "status": "fail",
//     "message": "Catatan tidak ditemukan"
//   }

//   {
//     "title":"Judul Catatan Revisi",
//     "tags":[
//       "Tag 1",
//       "Tag 2"
//     ],
//     "body":"Konten catatan"
//   }

//   {
//     "status": "success",
//     "message": "Catatan berhasil diperbaharui"
//   }

//   {
//     "status": "fail",
//     "message": "Gagal memperbarui catatan. Id catatan tidak ditemukan"
//   }

//   // Kriteria 4 - Web Server dapat menghapus catatan
//   {
//     "status": "success",
//     "message": "Catatan berhasil dihapus"
//   }

//   {
//   "status": "fail",
//   "message": "Catatan gagal dihapus. Id catatan tidak ditemukan"
// }


