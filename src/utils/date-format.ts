import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatNumberToLocale = (date: number) => {
  return format(new TZDate(date), "eee, dd 'de' MMMM 'de' yyyy.", {
    locale: ptBR,
  });
};

export const formatTZDateToLocale = (date: TZDate) =>
  format(date, "dd/MM/yyyy", {
    locale: ptBR,
  });
