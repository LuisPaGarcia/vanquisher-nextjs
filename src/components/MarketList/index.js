import React, { useEffect, useRef, useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import NewItemForm from "./NewItemForm";
import { useFetchUser } from "utils/user";
import redaxios from "redaxios";

function MarketList() {
  let pendingUpdate = false;
  const [list, listSet] = useState([]);
  const [itemDescription, itemDescriptionSet] = useState("");
  const [loading, loadingSet] = useState(false);
  const { user, loading: isLoading } = useFetchUser();
  const inputRef = useRef(null);

  const getList = async () => {
    try {
      const response = await redaxios.get("/api/data/getList");
      listSet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => itemDescriptionSet(event.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!itemDescription.trim()) return;
    await saveItem({
      name: user.name,
      picture: user.picture,
      description: itemDescription,
    });
    itemDescriptionSet("");
    inputRef.current.focus();
  };

  const saveItem = async ({ name, picture, description }) => {
    try {
      loadingSet(true);
      await redaxios.post("/api/data/saveItem", {
        name,
        picture,
        description,
      });
      await getList();
    } catch (error) {
      console.log(error);
    } finally {
      loadingSet(false);
    }
  };

  // checkTask = () => {
  //   try {
  //   } catch (error) {}
  // };

  useEffect(() => {
    inputRef.current.focus();
    getList();
  }, []);

  return (
    <div className="px-4 py-4">
      <h1 className="text-2xl font-bold pb-4">Lista de compras</h1>
      <List>
        {list.map((item) => (
          <ListItem
            key={item._id}
            picture={item.picture}
            name={item.name}
            description={item.description}
          />
        ))}
      </List>
      <hr />
      <NewItemForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        itemDescription={itemDescription}
        inputRef={inputRef}
        loading={loading}
      />
    </div>
  );
}

export default MarketList;
