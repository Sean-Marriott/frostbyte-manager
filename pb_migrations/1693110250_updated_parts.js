/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8lyos8n0cbqo5z6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggwohzcp",
    "name": "condition",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "new",
        "used",
        "faulty",
        "test"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8lyos8n0cbqo5z6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggwohzcp",
    "name": "condition",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 6,
      "values": [
        "new",
        "used",
        "faulty",
        "test",
        "shipped",
        "to be shipped"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
