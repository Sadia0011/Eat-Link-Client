

const Blog = () => {
    return (
        <div>
            <h2 className="text-3xl text-center">Blog Questions & Answers</h2>
            <div className="collapse collapse-plus bg-base-200 my-10">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  what is one way data binding? 
  </div>
  <div className="collapse-content"> 
    <p>One-way data binding is a unidirectional data flow where data is transferred from the model to the view, allowing changes in the model to instantly reflect in the view.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What is NPM in node.js?
  </div>
  <div className="collapse-content"> 
    <p>NPM (Node Package Manager) is a software registry and dependency manager for Node.js, allowing developers to easily share and distribute JavaScript code and manage project dependencies.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Different between Mongodb database vs mySQL database
  </div>
  <div className="collapse-content"> 
    <p>MongoDB is a NoSQL, document-oriented database that stores data in JSON-like documents with dynamic schemas. It is best suited for unstructured data and scalable for large datasets. On the other hand, MySQL is a relational database that uses a structured query language (SQL) to manage and store data. It is suitable for structured data with complex relationships and is widely used for traditional applications.</p>
  </div>
</div>
        </div>
    );
};

export default Blog;