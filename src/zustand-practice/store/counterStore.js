import {create} from 'zustand';

// 중앙 상태 저장소 생성
export const useCounterStore
  = create((set) => ({

  // 전역 관리할 상태값들을 배치
  count: 99,
  showCounter: true
}));

