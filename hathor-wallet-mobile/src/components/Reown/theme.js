import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/themes';

export const commonStyles = StyleSheet.create({
  // Card
  card: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 12,
    shadowColor: COLORS.shadowDark,
    shadowOpacity: 0.4,
    elevation: 6,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
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
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.textColor,
  },
  bold: {
    fontWeight: 'bold',
  },
  field: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  mb4: {
    marginBottom: 4,
  },
  mt8: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    color: COLORS.textColor,
    marginBottom: 20,
  },
  // Modal styles
  body: {
    paddingBottom: 24,
  },
  selectionContainer: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.textColor,
  },
});
