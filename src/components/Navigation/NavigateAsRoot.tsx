import { CommonActions, NavigationProp } from '@react-navigation/native';

export default function NavigateAsRoot({
  navigation,
  root,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  root: string;
}) {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: root }],
    })
  );
}
