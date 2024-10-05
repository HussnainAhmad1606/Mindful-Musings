import { create } from 'zustand'

export const useUserStore = create((set) => ({

  Username: "Psycho",
  SetUsername: (newUsername:String) => set({Username:newUsername}),
  Email: "",
  SetEmail: (newEmail:String) => set({ Email:newEmail }),
  UserId: "",
  SetUserId: (newId:String) => set({ UserId:newId }),
  IsLogin: false,
  SetIsLogin: (newIsLogin:Boolean) => set({ isLogin: newIsLogin }),
  
  Attachment: "",
  SetAttachment: (newState:String) => set({ attachment:newState}),
  UploadProgressCaption: "",
  SetUploadProgressCaption: (newState:String) => set({ uploadProgressCaption:newState}),
  AttachmentProgress: 0,
  SetAttachmentProgress: (newState:Number) => set({ attachmentProgress:newState}),




}))