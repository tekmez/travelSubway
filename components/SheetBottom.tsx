import React, { forwardRef, useRef } from "react";
import { Text } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
const SheetBottom = forwardRef<any, any>((props, ref) => {
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={ref} index={1} snapPoints={[150, 150]}>
        <BottomSheetView>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

export default SheetBottom;
