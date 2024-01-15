/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1dbztppqa5ogb5m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ylsuowac",
    "name": "pl",
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

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1dbztppqa5ogb5m")

  // remove
  collection.schema.removeField("ylsuowac")

  // remove
  collection.schema.removeField("fdcjfvbs")

  return dao.saveCollection(collection)
})
