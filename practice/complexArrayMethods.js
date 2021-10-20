//AR bhai's difficult one
const array = ["1 Min", "3 Minute", "5 Minute", "7 Minute", "Core", "Flex System",{"name":"3 Minute","image":"s"}, {"name":"5 Minute","image":"someImage"}];
const newCategories = array.filter((oneCategory) => oneCategory.name && oneCategory.image);
const categories = array.map((oneCategory) => typeof oneCategory === 'string' ? { name: oneCategory, image: "" } : oneCategory);

 
//uses loaddash
const updatedCategries = _.uniq(categories, 'name').map((oneCategory) => {
    const index = newCategories.findIndex((category) => category.name === oneCategory.name);
  if (index !== -1) return newCategories[index];
  return oneCategory;
});

 

console.info(updatedCategries)