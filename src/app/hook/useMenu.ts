
import { useQuery } from "@tanstack/react-query";

type Category = {
  id: string | number;
  category: string;
  icon: string;
  foods?: Food[];
};

type Food = {
  [key: string]: unknown;
  category?: string;
};
export const useMenu = () => {
  return useQuery({
    queryKey: ["menuData"],
    queryFn: async () => {
      const res = await fetch("https://menu.rhinomenu.com/bricklounge.js");
      const text = await res.text();

      const firstIdx = Math.min(
        ...["{", "["].map((ch) => {
          const i = text.indexOf(ch);
          return i === -1 ? Infinity : i;
        })
      );

      let parsed: unknown = null;
      if (firstIdx !== Infinity) {
        const startChar = text[firstIdx];
        const endChar = startChar === "{" ? "}" : "]";
        let depth = 0;
        let endIdx = -1;

        for (let i = firstIdx; i < text.length; i++) {
          if (text[i] === startChar) depth++;
          if (text[i] === endChar) depth--;
          if (depth === 0) {
            endIdx = i;
            break;
          }
        }

        parsed = JSON.parse(text.slice(firstIdx, endIdx + 1));
      }



      const allFoods: Food[] = [];
      (Array.isArray(parsed) ? parsed : []).forEach((cat: Category) => {
        if (Array.isArray(cat.foods)) {
          cat.foods.forEach((f: Food) => {
            allFoods.push({ ...f, category: cat.category });
          });
        }
      });

      return {
        categories: parsed,
        foods: allFoods,
      };
    },
  });
};
