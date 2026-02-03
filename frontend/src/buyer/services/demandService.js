const STORAGE_KEY = "buyer_demands";

// ✅ Safe JSON parse
const parseJSON = (data) => {
  try {
    return JSON.parse(data) || [];
  } catch {
    return [];
  }
};

// ✅ Get all demands
export const getDemands = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return parseJSON(data);
};

// ✅ Create new demand
export const createDemand = (data) => {
  const demands = getDemands();

  const newDemand = {
    id: Date.now(),
    crop: data.crop,
    quantity: Number(data.quantity),
    price: Number(data.price),
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  const updated = [newDemand, ...demands];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return newDemand;
};

// ✅ Delete demand
export const deleteDemand = (id) => {
  const updated = getDemands().filter((d) => d.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

// ✅ Update demand status
export const updateDemandStatus = (id, status) => {
  const updated = getDemands().map((d) =>
    d.id === id ? { ...d, status } : d
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
