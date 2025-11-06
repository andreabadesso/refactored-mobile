import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/themes';

export const commonStyles = StyleSheet.create({
  // Card
  card: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    shadowOffset: { height: 8, width: 0 },
    shadowRadius: 20,
    shadowColor: COLORS.shadowPrimary,
    shadowOpacity: 0.5,
    elevation: 10,
    borderWidth: 1,
    borderColor: COLORS.borderGlow,
  },
  cardSplit: {
    flexDirection: 'row',
    gap: 16,
  },
  cardSplitIcon: {
    flexShrink: 1,
    alignSelf: 'flex-start',
  },
  cardSplitContent: {
    maxWidth: '80%',
    flexDirection: 'column',
    gap: 8,
  },
  cardSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.borderColor
  },
  cardStack: {
    flexDirection: 'column',
  },
  cardStackItem: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  listItem: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  feedbackItem: {
    paddingHorizontal: 16,
  },

  // General
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.textColor,
  },
  bold: {
    fontWeight: 'bold',
  },
  field: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  mb4: {
    marginBottom: 4,
  },
  mt8: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    color: COLORS.textColor,
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  // Modal styles
  body: {
    paddingBottom: 32,
  },
  selectionContainer: {
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: COLORS.borderGlow,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.textColor,
    letterSpacing: -0.5,
  },
});
