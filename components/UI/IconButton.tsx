import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {IIcon} from '../../types/icon';

interface IconButtonProps {
  icon: React.FC<IIcon>;
  onPress: () => void;
  size: number;
  color: string;
}

function IconButton({icon: Icon, onPress, size, color}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.container, pressed && styles.pressed]}>
      <Icon size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: '#48cece',
  },
});

export default IconButton;
