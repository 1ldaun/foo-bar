import { contactsInterface } from "../../views/ContactsPage/ContactsPage";

export const contactsMock: contactsInterface = {
  phone:
    "+7(988)-100-59-39 - вопросы по заказам\n+7(988)-100-59-39 - сотрудничество",
  address: {
    city: "г. Санкт-Петербург",
    street: "ул. Ломоносова",
    building: "д. 9",
  },
  email: ["info@foo-bar.ru - общие вопросы", "sale@foo-bar.ru - отдел продаж"],
  schedule: "ежедневно с 10:00 до 22:00",
};
