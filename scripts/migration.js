const fs = require("fs-extra");
const { weeklyData } = require("../content/weekly")

const sortedData = weeklyData

for (const item of sortedData) {
    const jsonData = JSON.stringify(item)

    fs.writeFileSync(`./${item.id}.json`, jsonData);
}
