import { Staff_1, Staff_2, Staff_3, Staff_4, Staff_5, Staff_6, Staff_7, Staff_8, Staff_9, Staff_10 } from '~/assets/image' 

// Interfeys: Xodimlar ma'lumotlari turi
export interface StaffMember {
  id: number;
  fullName: string;
  position: string;
  image: string;
}

export const staffMembers: StaffMember[] = [
  { id: 1, fullName: "Dr. Alisher Vohidov", position: "staff.positions.cardiologist", image: Staff_1 },
  { id: 2, fullName: "Dr. Malika Axmedova", position: "staff.positions.pediatrician", image: Staff_2 },
  { id: 3, fullName: "Dr. Jasur Karimov", position: "staff.positions.neurologist", image: Staff_3 },
  { id: 4, fullName: "Dr. Nigora Sobirova", position: "staff.positions.surgeon", image: Staff_4 },

  { id: 5, fullName: "Dr. Rustam Qosimov", position: "staff.positions.dentist", image: Staff_5 },
  { id: 6, fullName: "Dr. Shahlo Mirzayeva", position: "staff.positions.dermatologist", image: Staff_6 },
  { id: 7, fullName: "Dr. Aziz To'rayev", position: "staff.positions.ophthalmologist", image: Staff_7 },
  { id: 8, fullName: "Dr. Umida G'ofurova", position: "staff.positions.endocrinologist", image: Staff_8 },

  { id: 9, fullName: "Dr. Sanjar Ismoilov", position: "staff.positions.urologist", image: Staff_9 },
  { id: 10, fullName: "Dr. Barno Ergasheva", position: "staff.positions.gynecologist", image: Staff_10 },
  { id: 11, fullName: "Dr. Botir Rahimov", position: "staff.positions.orthopedist", image: Staff_3 },
  { id: 12, fullName: "Dr. Feruza Olimova", position: "staff.positions.psychiatrist", image: Staff_4 },

  { id: 13, fullName: "Dr. Bekzod Yusupov", position: "staff.positions.radiologist", image: Staff_1 },
  { id: 14, fullName: "Dr. Gulnora Hasanova", position: "staff.positions.therapist", image: Staff_2 },
  { id: 15, fullName: "Dr. Sardor Aminov", position: "staff.positions.oncologist", image: Staff_3 },
  { id: 16, fullName: "Dr. Lola Karimova", position: "staff.positions.gastroenterologist", image: Staff_4 },

  { id: 17, fullName: "Dr. Elyor Mansurov", position: "staff.positions.otolaryngologist", image: Staff_1 },
  { id: 18, fullName: "Dr. Rayhon Toirova", position: "staff.positions.hematologist", image: Staff_2 },
  { id: 19, fullName: "Dr. Jamshid Nosirov", position: "staff.positions.nephrologist", image: Staff_3 },
  { id: 20, fullName: "Dr. Zilola Orifova", position: "staff.positions.pulmonologist", image: Staff_4 },
];