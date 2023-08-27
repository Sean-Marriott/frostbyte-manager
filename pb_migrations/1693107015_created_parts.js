/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8lyos8n0cbqo5z6",
    "created": "2023-08-27 03:30:15.590Z",
    "updated": "2023-08-27 03:30:15.590Z",
    "name": "parts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uxksn1yj",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "6201ajjt",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "etnhxpun",
        "name": "purchase_date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "uhae8zfo",
        "name": "files",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8lyos8n0cbqo5z6");

  return dao.deleteCollection(collection);
})
