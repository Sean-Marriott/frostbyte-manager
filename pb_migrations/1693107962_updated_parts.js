/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8lyos8n0cbqo5z6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "srp8hhtb",
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
    "id": "lzl4qoub",
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
  const collection = dao.findCollectionByNameOrId("8lyos8n0cbqo5z6")

  // remove
  collection.schema.removeField("srp8hhtb")

  // remove
  collection.schema.removeField("lzl4qoub")

  return dao.saveCollection(collection)
})
