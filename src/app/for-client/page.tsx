"use client";

import { useEffect, useState } from "react";
import { DateWrapper } from "../../libs/date-wrapper";

export default function Home() {
  const [date, setDate] = useState<DateWrapper>();

  useEffect(() => {
    setDate(new DateWrapper());
  }, []);

  return (
    <main>
      {date ? (
        <div>
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
        </div>
      ) : null}
    </main>
  );
}
