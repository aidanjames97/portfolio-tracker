/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1dbztppqa5ogb5m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ip4xntr4",
    "name": "marketValue",
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
    "id": "qndhbnjj",
    "name": "currentPrice",
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
  collection.schema.removeField("ip4xntr4")

  // remove
  collection.schema.removeField("qndhbnjj")

  return dao.saveCollection(collection)
})
