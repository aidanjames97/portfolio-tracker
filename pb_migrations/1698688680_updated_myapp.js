/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1dbztppqa5ogb5m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdcjfvbs",
    "name": "percentPL",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1dbztppqa5ogb5m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdcjfvbs",
    "name": "percentlp",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
