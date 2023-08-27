/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8lyos8n0cbqo5z6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cdlyde3o",
    "name": "trademe_reference",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8lyos8n0cbqo5z6")

  // remove
  collection.schema.removeField("cdlyde3o")

  return dao.saveCollection(collection)
})
