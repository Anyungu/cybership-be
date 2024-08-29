-- Add your custom SQL to create triggers
CREATE OR REPLACE FUNCTION generate_order_reference()
RETURNS TRIGGER AS $$
BEGIN
  NEW.reference := 'ORD-' || EXTRACT(EPOCH FROM NOW()) || '-' || substring(md5(random()::text), 1, 8);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


CREATE TRIGGER before_insert_order
BEFORE INSERT ON "Order"
FOR EACH ROW
EXECUTE FUNCTION generate_order_reference();