```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, // Incorrect field usage
  {$sort: {sum: -1}}
]);
```