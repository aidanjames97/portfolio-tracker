/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1dbztppqa5ogb5m",
    "created": "2023-10-23 19:57:09.691Z",
    "updated": "2023-10-23 19:57:09.691Z",
    "name": "myapp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zmzt0c00",
        "name": "text",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1dbztppqa5ogb5m");

  return dao.deleteCollection(collection);
})
