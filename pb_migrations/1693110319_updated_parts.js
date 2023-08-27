/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8lyos8n0cbqo5z6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mp1sla7l",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "awaiting dispatch",
        "shipped",
        "recieved"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8lyos8n0cbqo5z6")

  // remove
  collection.schema.removeField("mp1sla7l")

  return dao.saveCollection(collection)
})
