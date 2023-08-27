/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0japy268f2ohx73",
    "created": "2023-08-27 03:35:13.114Z",
    "updated": "2023-08-27 03:35:13.114Z",
    "name": "pcs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gefgqn8y",
        "name": "expenses",
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
        "id": "o1gtcyzd",
        "name": "sale_price",
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
        "id": "us4ayfjp",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 6,
          "values": [
            "building",
            "built",
            "sold",
            "theory",
            "listed",
            "arrving"
          ]
        }
      },
      {
        "system": false,
        "id": "gemkiuak",
        "name": "sale_date",
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
        "id": "50w2ou3y",
        "name": "images",
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
      },
      {
        "system": false,
        "id": "rbx53dhv",
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
      },
      {
        "system": false,
        "id": "rtdgidvr",
        "name": "trademe",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "luzen4uv",
        "name": "facebook",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "0ymzg98y",
        "name": "parts",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "8lyos8n0cbqo5z6",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("0japy268f2ohx73");

  return dao.deleteCollection(collection);
})
