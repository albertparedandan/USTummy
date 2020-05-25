import * as SQLite from 'expo-sqlite'

const database_name = 'ustTummy.db'
const database_version = '1.0'
const database_displayname = 'SQLite USTummy Database'
const database_size = 200000

export default class Database {
  initDB () {
    let db
    return new Promise((resolve) => {
      console.log('Plugin integrity check ...')
      SQLite.echoTest()
        .then(() => {
          console.log('Integrity check passed ...')
          console.log('Opening database ...')
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size
          )
            .then(DB => {
              db = DB
              console.log('Database open')
              db.executeSql('SELECT 1 FROM Product LIMIT 1').then(() => {
                console.log('Database is ready ... executing query ...')
              }).catch((error) => {
                console.log('Received error: ', error)
                console.log('Database not yet ready, populating data')
                db.transaction((tx) => {
                  tx.executeSql('CREATE TABLE IF NOT EXISTS Product (prodId, prodName, prodDesc, prodImage, prodPrice)')
                }).then(() => {
                  console.log('Table creeated successfully')
                }).catch(error => {
                  console.log(error)
                })
              })
              resolve(db)
            })
            .catch(error => {
              console.log(error)
            })
        })
        .console.log('echoTest failed - plugin not functional')
    })
  }
}
