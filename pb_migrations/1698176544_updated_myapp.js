/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1dbztppqa5ogb5m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cf2xiqjt",
    "name": "buyPrice",
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
    "id": "xt2axqq0",
    "name": "buyAmount",
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
  collection.schema.removeField("cf2xiqjt")

  // remove
  collection.schema.removeField("xt2axqq0")

  return dao.saveCollection(collection)
})
