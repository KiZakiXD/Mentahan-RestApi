const express = require('express')
var router = express.Router();

const { Wangy, Nenen, Simp, Sherk, Wangy2 } = require('../scraper/index') 

router.get('/stress', async(name, res) => {
	var nama = req.query.nama
	if (!nama) return res.json({ message: 'masukan parameter nama' })
	var hasil = await stress(nama)
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

module.exports = router
