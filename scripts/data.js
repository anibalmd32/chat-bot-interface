// GET DATA FROM THE ENDPOINT
async function getData() {
	try {
		const res = await fetch('http://www.test.readychatai.com/data')
		const resJson = await res.json()

		return resJson
	} catch (error) {
		console.error(error)
	}
}

const allData = await getData() // GET ALL DATA
const platformsData = allData.map(el => el.platform) // GET ALL PLATFORMS
const platforms = [...new Set(platformsData)] // GET UNIQUE PLATFORMS

// GET CHATS BY PLATFORM
const getChats = (platform) => allData.filter(el => el.platform === platform)

export {
	allData,
	platforms,
	getChats
}
