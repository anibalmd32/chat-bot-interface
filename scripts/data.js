async function getData() {
	try {
		const res = await fetch('http://www.test.readychatai.com/data')
		const resJson = await res.json()

		return resJson
	} catch (error) {
		console.log(error)
	}
}

const allData = await getData()
const platformsData = allData.map(el => el.platform)
const platforms = [...new Set(platformsData)]
const getChats = (platform) => allData.filter(el => el.platform === platform)

export {
	allData,
	platforms,
	getChats
}
