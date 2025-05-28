export async function fetchVehiclesData() {
  const res = await fetch("https://rx-demos.netlify.app/task/data.json");
  console.log(res);
  if (!res.ok) {
    throw new Error("Ошибка при загрузке данных");
  }
  const data = await res.json();
  return data;
}
