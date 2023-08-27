/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0japy268f2ohx73")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3gabxo8n",
    "name": "buyer",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1ruwe13hez45723",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ull1bsts",
    "name": "seller",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1ruwe13hez45723",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0japy268f2ohx73")

  // remove
  collection.schema.removeField("3gabxo8n")

  // remove
  collection.schema.removeField("ull1bsts")

  return dao.saveCollection(collection)
})
