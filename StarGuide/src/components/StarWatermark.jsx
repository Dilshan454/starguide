import React, { useMemo } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function StarWatermark() {
  
  const stars = useMemo(() => {
    const starsCount = 120; 
    return Array.from({ length: starsCount }).map((_, index) => ({
      id: index,
      
      top: Math.random() * height, 
      left: Math.random() * width,
      size: Math.random() * 2.5 + 1.5, 
      opacity: Math.random() * 0.7 + 0.3, 
    }));
  }, []);

  return (
    <View style={styles.watermarkContainer} pointerEvents="none">
      {stars.map((star) => (
        <View
          key={star.id}
          style={[
            styles.star,
            {
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              borderRadius: star.size / 2,
              opacity: star.opacity,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  watermarkContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    elevation: 0, 
    overflow: 'hidden',
  },
  star: {
    position: 'absolute',
    backgroundColor: '#FFFFFF', 
    
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    
    elevation: 2,
  },
});