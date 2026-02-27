import { useState } from "react";
import { useSession } from "@clerk/clerk-react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { session } = useSession();   //  session lo

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      // session se token lo
      const supabaseAccessToken = await session?.getToken({
        template: "supabase",
      });

      const response = await cb(supabaseAccessToken, options, ...args);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn };
};

export default useFetch;