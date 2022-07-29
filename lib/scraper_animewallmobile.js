const cheerio = require('cheerio')
const axios = require('axios')
const { JSDOM } = require('jsdom')
const request = require('request')
const fetch = require('node-fetch')
const fs = require('fs')

function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://www.animewallmobile.com/?m=1' + querry, {
			headers: {
			"cookie" : ""
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

module.exports = { pinterest }
