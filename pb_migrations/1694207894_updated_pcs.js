/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0japy268f2ohx73")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "em4kixdk",
    "name": "fees",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0japy268f2ohx73")

  // remove
  collection.schema.removeField("em4kixdk")

  return dao.saveCollection(collection)
})
